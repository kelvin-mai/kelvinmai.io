In returning to clojure, there was one library that I wanted to check out and that one is [honeysql][4]. HoneySQL is a library where you can create a clojure map and use the `sql/format` function to turn that map into a raw sql query.

```clojure
(require '[honeysql.core :as sql]
         '[honeysql.helpers :refer :all :as helpers])

(def sqlmap {:select [:a :b :c]
             :from   [:foo]
             :where  [:= :f.a "baz"]})

(sql/format sqlmap)
;; => ["SELECT a, b, c FROM foo WHERE f.a = ?" "baz"]
```

The above example is one that shows off the capabilities of the library, but below we have the classic "get everything" query for simplicity's sake.

```clojure
(def sqlmap {:select [:*]
             :from   [:bar]})

(sql/format sqlmap)
;; => ["SELECT * FROM bar"]
```

But there is one small problem, the library is very useful in creating raw query strings, but I couldn't find an example of actually executing these queries, and that is what I want to accomplish with this post. For this post we'll be using the Clojure CLI rather than lieningen, so I have included the minimum configuration of a deps.edn file below as well as a nrepl alias.

```clojure
{:paths ["src"]
 :deps {org.clojure/clojure {:mvn/version "1.10.1"}
        org.postgresql/postgresql {:mvn/version "42.2.2"}
        seancorfield/next.jdbc {:mvn/version "1.1.613"}
        honeysql/honeysql {:mvn/version "1.0.444"}}
 :aliases {:nrepl {:extra-deps {nrepl/nrepl {:mvn/version "0.8.0"}
                                cider/cider-nrepl {:mvn/version "0.25.2"}}
                   :main-opts ["-m" "nrepl.cmdline" "--middleware" "[cider.nrepl/cider-middleware]"]}}
```

Some of these versions may have been updated, so make sure to check [clojars][1], and for this example I will be using postgres as the database of choice if you are instead interested in a different data source, relevant links to the drivers are available on the clojure [jdbc][2] library readme. Speaking of which, even though we'll be using [next.jdbc][3], the initial configuration def will be the same as shown below.

```clojure
(ns example.db
  (:require [next.jdbc :as jdbc]))

(def db-config
  {:dbtype "postgresql"
   :dbname "example_db"
   :host "localhost"
   :user "postgres"
   :password "postgres"})

(def db (jdbc/get-datasource db-config))
```

I'm unsure what the difference between the original jdbc and `next.jdbc` is, but figured it would be a good idea to use the latest and greatest connection library and skip whatever headaches were present that prompted the creation of this new library. Here you can see that connection configuration being used by `jdbc/get-datasource` and the persisted connection is held in the `db` var. And now all we need to do now is to execute queries which we can do by calling `jdbc/execute!`. It's important to note that the first argument is the database connection which we've defined above.

```clojure
(jdbc/execute! db ["CREATE TABLE thing (
                     id SERIAL,
                     title TEXT,
                     description TEXT)"])
;; => [#:next.jdbc{:update-count 0}]

(jdbc/execute! db ["SELECT * FROM thing"])
;; => []
```

And lastly instead of writing raw sql, we come full circle and can now use the honeysql library to pass in formatted sql maps. So simply replace the vector of sql queries with some honeysql operations. So if we were to run the following in the repl, we'll get some desired side effects. (The libraries are aliased as above from the `require` statements.)

```clojure
(jdbc/execute! db (sql/format
                      {:select [:*]
                       :from [:thing]}))
;; => []
(jdbc/execute! db (sql/format
                      {:insert-into :thing
                       :columns [:text :description]
                       :values [["blog" "written articles"]
                                ["article" "blog post"]]}))
;; => [#:next.jdbc{:update-count 2}]
;; => [#:thing{:id 1, :title "blog", :description "written articles"}
(jdbc/execute! db (sql/format
                      {:select [:*]
                       :from [:thing]}))
;; => [#:thing{:id 2, :title "article", :description "blog post"}]
```

And that's all there is to it, I hope some have found this post useful.

## Resources

- [clojars][1]
- [clojure/java.jdbc][2]
- [next.jdbc][3]
- [honeysql][4]

## Follow and support me

- [YouTube](https://www.youtube.com/c/kelvinmai)
- [Twitter](https://twitter.com/kelvinmai)

[1]: https://clojars.org/
[2]: https://github.com/clojure/java.jdbc
[3]: https://github.com/seancorfield/next-jdbc
[4]: https://github.com/seancorfield/honeysql

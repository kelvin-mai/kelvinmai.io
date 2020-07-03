I recently started picking up .NET Core again. I was a bit worried because I'm on a linux operating system, and [state of .NET](https://www.reddit.com/r/archlinux/comments/cx64r5/the_state_of_net_core_on_arch/) is not exactly stable. (Also the obligatory "btw I use arch" meme). The process was pretty much straightforward but I still decided to do some troubleshooting. And here is the result.

# Installation process

Install `dotnet-sdk` and `dotnet-runtime` from the Manjaro package manager GUI or you can use the following terminal command. I assume this will work on vanilla Arch as well using the `pacaur` command instead of `pacman`.

```
pacman -S dotnet-sdk dotnet-runtime
```

You can check if dotnet is installed by running the version command. And it will also be important to check where dotnet is running for reasons we'll get into later.

```
$ dotnet --version
3.1.103
$ whereis dotnet
dotnet: /usr/bin/dotnet /usr/share/dotnet
```

If the location of dotnet is not `/usr/share/dotnet` you will have to create a new file in `/etc/profile.d/dotnet.sh` with the following content as root so remember to use `sudo`. Doing this will require you to reboot or re-login. This note was found [here](https://gist.github.com/waynebloss/55aa06b13a3f647c45b57caa31397089).

```bash
export DOTNET_ROOT=/opt/dotnet
export MSBuildSDKsPath=$DOTNET_ROOT/sdk/$(${DOTNET_ROOT}/dotnet --version)/Sdks
export PATH=${PATH}:${DOTNET_ROOT}
```

Then finally in `~/.bashrc` file add the following lines, `~/.zshrc` if you're using zsh.

```bash
# DOTNET - Required
export PATH="$PATH:/home/YOUR_USER_NAME/.dotnet/tools"
# DOTNET - Optional
export DOTNET_CLI_TELEMETRY_OPTOUT=1
export ASPNETCORE_ENVIRONMENT=Development
```

And now you should be ready to start developing .NET Core applications on your Manjaro linux machine.

## Links

- [.NET Core](https://wiki.archlinux.org/index.php/.NET_Core)
- [The state of .NET Core on Arch](https://www.reddit.com/r/archlinux/comments/cx64r5/the_state_of_net_core_on_arch/)
- [Manjaro dotnet setup](https://gist.github.com/waynebloss/55aa06b13a3f647c45b57caa31397089)

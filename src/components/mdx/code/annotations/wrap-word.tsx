import {
  AnnotationHandler,
  InnerLine,
  InnerPre,
  InnerToken,
} from 'codehike/code';

export const wordWrap: AnnotationHandler = {
  name: 'word-wrap',
  Pre: (props) => <InnerPre merge={props} className='whitespace-pre-wrap' />,
  Line: (props) => (
    <InnerLine merge={props}>
      <div
        style={{
          textIndent: `${-props.indentation}px`,
          marginLeft: `${props.indentation}`,
        }}
      >
        {props.children}
      </div>
    </InnerLine>
  ),
  Token: (props) => <InnerToken merge={props} style={{ textIndent: 0 }} />,
};

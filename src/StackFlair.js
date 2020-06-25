import React, { PureComponent } from "react";

export default class StackFlair extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const url = (this.props.combined ? "https://stackexchange.com" : "https://stackoverflow.com");

    return (
        <div className={ this.props.className }>
            <a href={ url + "/users/" + this.props.id + "/" + this.props.userName }>
                <img src={ url + "/users/flair/" + this.props.id + ".png?theme=" + this.props.theme } width={ this.props.width } height={ this.props.height } alt={ "profile for " + this.props.userName + " at Stack Overflow, Q&amp;A for professional and enthusiast programmers" } title={ "profile for " + this.props.userName + " at Stack Overflow, Q&amp;A for professional and enthusiast programmers" }/>
            </a>
        </div>
    );
  }
}

Flair.defaultProps = {
    className: "stack-flair-wrapper",
    combined: false,
    height: 58,
    theme: 'default',
    width: 208
  };
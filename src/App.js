import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    const marked = require('marked');
    marked.setOptions({
      gfm: true,
      breaks: true,
    })
    super(props);
    const defaultText = (
      "An H1 Header\r====================\r" +
      "# This is also an H1\r" +
      "An H2 Header\r---------------------\r" +
      "## This is also an H2\r" +
      "\r" +
      "A regular paragraph without styling.\r" +
      "### An H3 Header\r\r" +
      "> This is the first level of quoting.\r>\r>> This is nested blockquote.\r>\r> Back to the first level.\r\r" +
      "How to format **bold** words.\r" +
      "Another way to _emphasize_.\r" +
      "*   An.\r*   Unordered.\r*   List.\r\r" +
      "1. An.\r2. Ordered.\r3. List.\r\r" +
      "This is [an example](http://example.com/ \"Title\") inline link.\r\r" + //I think this fixes the <a> problem
      "Use the `printf()` function.\r\r" + //I think this solves the <code> questions
      "Now for some multi line coding: \r" +
      "```\rfunction anotherExample(firstLine, lastLine) {\rif (firstLine == '```' && lastLine == '```') {\rreturn multiLineCode;\r}\r}\r```\r" +
      "`const marked=require('marked'); input: this.defaultText; `\r\r" +
      "![react photo](/react.jpg \"React Photo\")\r"
    )

    this.state = {
      input: defaultText,
      output: marked(defaultText),
    }

    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);

  }

  handleEditorChange(event) {
    const marked = require('marked');
    marked.setOptions({
      breaks: true,
      gfm: true
    })
    this.setState({
      input: event.target.value,
      output: marked(event.target.value),
    });
  }


  handleClearClick(event){
    this.setState({
      input: this.defaultText,
    })
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Turn Markdown into HTML
          </p>
        </header>

        <section className="display">

        <form className="input">
          <label htmlFor="text-editor">Preview Your Own Markdown Text!</label>
            <textarea id="editor"
                      type="text"
                      value={this.state.input}
                      onChange={this.handleEditorChange}
                      name="text-editor"
                      cols="40"
                      rows="80"
                      placeholder={this.state.output}>
            </textarea>
            <button type="clear"
                   value="clear"
                   className="clearButton"
                   onClick={this.handleClearClick}>Clear</button>
          </form>

          <div className="output">
            <label htmlFor="text-preview">Translated into HTML:</label>
            <div id="preview"
                 dangerouslySetInnerHTML={{__html: this.state.output}} />
          </div>

        </section>

      </div>
    );
  }

}

export default App;

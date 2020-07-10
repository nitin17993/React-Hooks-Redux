import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends Component {
  static contextType = LanguageContext;
  render() {
    return (
      <div>
        Select a language:
        <i
          onClick={() => this.context.onLanguageChange("english")}
          className="flag us"
        />
        <i
          onClick={() => this.context.onLanguageChange("hindi")}
          className="flag in"
        />
      </div>
    );
  }
}

export default LanguageSelector;

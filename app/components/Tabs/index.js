import React, { Component } from "react";
import PropTypes from "prop-types";

export class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    whiteSpace: PropTypes.bool.isRequired,
  };

  onClick = () => {
    const { title, onClick } = this.props;
    onClick(title);
  };

  render() {
    const { activeTab, title, whiteSpace } = this.props;

    return (
      <li
        className={`${
          activeTab === title
            ? "tabs-component_list_item tabs-component_list_item__active"
            : "tabs-component_list_item"
        }
        ${whiteSpace ? "tabs-component_list_item__no-whitespace" : ""}
        `}
        onClick={this.onClick}
      >
        <span>{title}</span>
      </li>
    );
  }
}

export default class Tabs extends Component {
  static Tab = Tab;
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
    currentTab: PropTypes.string,
    marginTop: PropTypes.number,
    whiteSpace: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeTab: props.currentTab
        ? props.children[props.currentTab].props.title
        : props.children[0].props.title,
    };
  }

  onClickTabItem = (tab) => {
    window?.localStorage?.removeItem("planned-checks-tab");
    this.setState({ activeTab: tab });
  };

  render() {
    const { children } = this.props;
    const { activeTab } = this.state;

    return (
      <div className="tabs-component">
        <div className="tabs_links">
          <ol className="tabs-component_list">
            {children.map((child) => {
              const { title } = child.props;

              return (
                <Tab
                  whiteSpace={this.props.whiteSpace ? true : false}
                  activeTab={activeTab}
                  key={title}
                  title={title}
                  onClick={this.onClickTabItem}
                />
              );
            })}
          </ol>
        </div>
        <div
          className="tabs-component_content"
          style={{ marginTop: this.props.marginTop ?? 25 }}
        >
          {children.map((child) => {
            if (child.props.title !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

import * as React from 'react'
import * as uuid from 'node-uuid'

import { SidebarElement } from "./SideBarItem";

export class SidebarItemList extends React.Component<{ label: string, icon: string, list: string[] }, any> implements SidebarElement {
    static propTypes() {
        return {
            label: React.PropTypes.string.isRequired,
            icon: React.PropTypes.string.isRequired,
            list: React.PropTypes.array.isRequired
        }
    }

    private id: string;

    componentWillMount() {
        this.id = uuid.v4();
    }

    render(): React.ReactElement<any> {
        return <li className="list-group-item secondary-nav-item-pf" data-target={'#' + this.id}>
            <a>
                <span className={'fa ' + this.props.icon} data-toggle="tooltip" title={this.props.label}></span>
                <span className="list-group-item-value">{this.props.label}</span>
            </a>
            <div id={this.id} className="nav-pf-secondary-nav">
                <div className="nav-item-pf-header">
                    <a className="secondary-collapse-toggle-pf"
                       data-toggle="collapse-secondary-nav"></a>
                    <span>{this.props.label}</span>
                </div>
                <ul className="list-group">
                    {this.props.list.map((name, index) => {
                        return <li key={index} className="list-group-item">
                            <a>
                                <span className="list-group-item-value">{name}</span>
                            </a>
                        </li>})}
                </ul>
            </div>
        </li>
    }
}
import React from "react";
import { Link } from "react-router-dom";

import ContactCard from '../components/ContactCard';
import Modal from '../components/Modal';
import {Context} from "../store/appContext.jsx";
let actionContext = null;
export default class Contacts extends React.Component {
	constructor(){
		super();
		this.state = {
			showModal: false  
		};
	}
	componentDidMount() {
		this.loadListContacts();
		console.log("aasdasd");
	}
	loadListContacts () {
		const url = "https://assets.breatheco.de/apis/fake/contact/agenda/alejo";
		fetch(url).then(response => response.json())
		.then(data => {
			actionContext.setListContacts(data);
		});
	}

	render() {
	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">Add new contact</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						<Context.Consumer>
							{({ actions, store }) => {
								
								actionContext = actions;
								const list = store.listContacts;
								const cards = [];
								if(list !== undefined){
									for(let i = 0; i < list.length; i++) {
										cards.push(<ContactCard key={i} onDelete={() => this.setState({ showModal: true})} dataContact={list[i]} />);
									}
								}
								return cards;
							}}
						</Context.Consumer>
					</ul>
				</div>
			</div>
			<Modal show={this.state.showModal} onClose={() => this.setState({showModal: false})} />
		</div>
		);
	}
}

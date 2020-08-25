// serenade.language("python").snippet(
//   "test method <%name%>",
//   "def test_<%name%>(self):<%newline%><%indent%>pass",
//   { "name": ["identifier", "underscores"] },
//   "method"
// );


// serenade.scope("vscode", ["typescript", "typescriptreact"]).snippet(
// 	"new react file class <%name%>",
// 	`import React from 'react'
// 	import '/<%name%>.module.scss'
	
// 	interface Props {

// 	}

// 	interface State {

// 	}
	
// 	class <%name%> extends React.Component<Props, State> {
// 			constructor(props) {
// 				super(props)
// 				this.state = {

// 				}
// 			}
// 			render() {
// 					return (
// 							<div className={}>
// 									<%cursor%>
// 							</div>
// 					)
// 			}
// 	}

// 	<%name%>.defaultProps = {
		
// 	}

// 	export default <%name%>`,
// 	{ "name": ["pascal", "identifier"], }

// )


// serenade.scope("vscode", ["typescript", "typescriptreact"]).snippet(
// 	"new react file function <%name%>",
// 	`import React from 'react'
// 	import '/<%name%>.module.scss'
	
// 	interface Props {

// 	}
	
// 	const <%name%>: React.FC<Props> = (props) => {
// 		return (
// 				<div className={}>
// 						<%cursor%>
// 				</div>
// 		)
// 	}

// 	<%name%>.defaultProps = {
		
// 	}

// 	export default <%name%>`,
// 	{ "name": ["pascal", "identifier"], }

// )


// serenade.scope("vscode", ["typescript", "typescriptreact"]).snippet(
// 	"new react function <%name%>",
// 	`interface <%name%>Props {

// 	}
	
// 	const <%name%>: React.FC<<%name%>Props> = (props) => {
// 		return (
// 				<div className={}>
// 						<%cursor%>
// 				</div>
// 		)
// 	}

// 	<%name%>.defaultProps = {
		
// 	}`,
// 	{ "name": ["pascal", "identifier"], }
// )



// serenade.scope("vscode", ["typescript", "typescriptreact"]).snippet(
// 	"react component did mount",
// 	`componentDidMount() {
// 		<%cursor%>
// 	}`,
// 	null,
// 	"method"
// )

// serenade.scope("vscode", ["typescript", "typescriptreact"]).snippet(
// 	"react component will unmmount",
// 	`componentWillUnmount() {
// 		<%cursor%>
// 	}`,
// 	null,
// 	"method"
// )

// serenade.scope("vscode", ["typescript", "typescriptreact"]).snippet(
// 	"react component did update",
// 	`componentDidUpdate(prevProps, prevState) {
// 		<%cursor%>
// 	}`,
// 	null,
// 	"method"
// )


import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Container } from '@chakra-ui/react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import apiDoc from './api.md'

const Documentation = () => {
	const [apiText, setApiText] = useState('')

	useEffect(() => {
		fetch(apiDoc).then(res => res.text()).then(text => setApiText(text))
	})

	return (
		<Container>
      <ReactMarkdown components={ChakraUIRenderer()} children={apiText} skipHtml />
		</Container>
	)
}

export default Documentation;

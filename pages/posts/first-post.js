import Link from 'next/link'
import Head from 'next/head'
import Layout from '@components/layout';

export default function FirstPost() {
	const postTitle = 'First Post';
	return (
		<Layout>
			<Head>
				<title>{postTitle}</title>
			</Head>
			<h1>{postTitle}</h1>
		</Layout>
	)
}

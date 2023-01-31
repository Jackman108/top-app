import { Htag } from '@/components';
import Head from 'next/head';



export default function Home(): JSX.Element {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="http://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />

			</Head>
			<main >
				<>
					<Htag tag='h1'> Текст </Htag>
				</>
			</main>
		</>
	);
}

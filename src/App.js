
import { BrowserRouter as Router, Route, Routes, useLocation, BrowserRouter } from "react-router-dom";
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollToTop from "./component/layout/ScrollToTop";
import ErrorPage from "./page/404";
import AboutPage from "./page/about";
import ContactPage from "./page/contact";
import CoursePage from "./page/course";
import CourseSingle from "./page/course-single";
import CourseView from "./page/course-view";
import ForgetPass from "./page/forgetpass";
import Home from "./page/home";
import InstructorPage from "./page/instructor";
import LoginPage from "./page/login";
import SearchNone from "./page/search-none";
import SearchPage from "./page/search-page";
import SignupPage from "./page/signup";
import TeamPage from "./page/team";
import TeamSingle from "./page/team-single";
import { ApolloClient, ApolloLink, InMemoryCache, split, ApolloProvider } from "@apollo/client";
import { getMainDefinition } from '@apollo/client/utilities';
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from '@apollo/client/link/ws';
import DashStudent from "./page/Dashborad/dashboard-student";
import ChatBot from "./component/chatbot/chatbot";
import UserLevelForm from "./page/UserLevelForm";


function App() {

	// const httpLink = new HttpLink({
	// 	uri: "http://localhost:4000/graphql",
	// });

	// const wsLink = new WebSocketLink({
	// 	uri: "ws:localhost:4000/graphql",
	// 	options: {
	// 		reconnect: true
	// 	}
	// });
	const httpLink = new HttpLink({
		uri: "https://connect-shiksha-backend.onrender.com/graphql",
	});

	const wsLink = new WebSocketLink({
		uri: "wss:connect-shiksha-backend.onrender.com/graphql",
		options: {
			reconnect: true
		}
	});

	const splitLink = split(
		({ query }) => {
			const definition = getMainDefinition(query);
			return (
				definition.kind === 'OperationDefinition' &&
				definition.operation === 'subscription'
			);
		},
		wsLink,
		httpLink,
	);

	const client = new ApolloClient({
		cache: new InMemoryCache(),
		link: ApolloLink.from([splitLink]),
	});

	return (
		<ApolloProvider client={client}>
			<ChatBot />
			<BrowserRouter>
				<ScrollToTop />
				<Routes >
					<Route path="/" element={<Home />} />
					<Route path="course" element={<CoursePage />} />
					<Route path="dashboard-student" element={<DashStudent />} />
					<Route path="course-single" element={<CourseSingle />} />
					<Route path="course-view" element={<CourseView />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="team" element={<TeamPage />} />
					<Route path="team-single" element={<TeamSingle />} />
					<Route path="instructor" element={<InstructorPage />} />
					<Route path="search-page" element={<SearchPage />} />
					<Route path="search-none" element={<SearchNone />} />
					<Route path="contact" element={<ContactPage />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="signup" element={<SignupPage />} />
					<Route path="forgetpass" element={<ForgetPass />} />
					<Route path="UserLevelForm" element={<UserLevelForm />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</ApolloProvider>
	);
}

export default App;

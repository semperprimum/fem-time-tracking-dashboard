import { styled } from "styled-components";
import { ReactComponent as IconElipses } from "../assets/images/icon-ellipsis.svg";
import { ReactComponent as IconWork } from "../assets/images/icon-work.svg";
import { ReactComponent as IconPlay } from "../assets/images/icon-play.svg";
import { ReactComponent as IconStudy } from "../assets/images/icon-study.svg";
import { ReactComponent as IconExercise } from "../assets/images/icon-exercise.svg";
import { ReactComponent as IconSocial } from "../assets/images/icon-social.svg";
import { ReactComponent as IconSelfCare } from "../assets/images/icon-self-care.svg";
import { useType } from "../context/TypeContext";

const CardWrapper = styled.div`
	margin-top: 1.5rem;

	@media only screen and (min-width: 60em) {
		margin-top: 0;
	}
`;
const Banner = styled.div`
	overflow: hidden;
	position: relative;
	z-index: -999;
	height: 3.375rem;
	border-radius: 0.9375rem 0.9735rem 0 0;
	svg {
		position: absolute;
		right: 1rem;
		top: -0.5rem;
	}
`;
const Content = styled.div`
	margin-top: -1rem;
	background-color: var(--clr-primary-500);
	border-radius: 0.9375rem;
	padding: 1.75rem 1.5rem;

	@media only screen and (min-width: 60em) {
		padding: 1.81rem 1.6rem 2rem 1.88rem;
		margin-top: -0.675rem;
		cursor: pointer;
		transition: background-color 170ms ease;
		&:hover {
			background-color: var(--clr-primary-450);
		}
	}
`;

const FlexBetween = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	${({ $blockOnDesktop }) =>
		$blockOnDesktop &&
		"@media only screen and (min-width: 60em) { display: block;} "}
`;
const ElipsesButton = styled.button`
	background: none;
	border: none;
	display: grid;
	place-items: center;
	fill: var(--clr-primary-200);
	@media only screen and (min-width: 60em) {
		transition: color 170ms ease;
		cursor: pointer;
		&:hover,
		&:focus-visible {
			fill: var(--clr-primary-100);
		}
	}
`;
const Title = styled.h2`
	font-size: var(--fs-400);
	margin-bottom: 0.44rem;

	@media only screen and (min-width: 60em) {
		margin-bottom: 0;
	}
`;
const Time = styled.p`
	font-size: var(--fs-600);
	@media only screen and (min-width: 60em) {
		margin-top: 1.56rem;
		margin-bottom: 0.5rem;
	}
`;
export function Card({ item }) {
	const type = useType();
	const icons = {
		Work: <IconWork />,
		Play: <IconPlay />,
		Study: <IconStudy />,
		Exercise: <IconExercise />,
		Social: <IconSocial />,
		SelfCare: <IconSelfCare />,
	};
	const timeFrameNames = {
		daily: "Yesterday",
		weekly: "Last Week",
		monthly: "Last Month",
	};
	const timeframes = (type) => {
		const current = item.timeframes[type].current;
		const previous = item.timeframes[type].previous;
		return { current, previous };
	};
	const { current, previous } = timeframes(type);

	return (
		<CardWrapper>
			<Banner
				className={`bg-accent-${item.title.toLowerCase().split(" ").join("-")}`}
			>
				{icons[item.title.split(" ").join("")]}
			</Banner>
			<Content>
				<FlexBetween>
					<Title className="fw-bold">{item.title}</Title>
					<ElipsesButton>
						<span className="visually-hidden">More</span>
						<IconElipses />
					</ElipsesButton>
				</FlexBetween>
				<FlexBetween $blockOnDesktop>
					<Time className="fs-600 fw-regular">
						{current}
						hrs
					</Time>
					<p className="fw-semi-bold text-primary-200">
						{timeFrameNames[type]} - {previous}
						hrs
					</p>
				</FlexBetween>
			</Content>
		</CardWrapper>
	);
}

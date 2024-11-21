import css from './Collections.module.css';
import { Link } from 'react-router-dom'; // Import Link for navigation

import rightArrow from '/icons/right-arrow.png';
import CallingBarHoppersImg from '/images/callingallbarhoppers.jpg';
import CathTheMatachImg from '/images/cathcthematch.jpg';
import NewInTownImg from '/images/newintown.jpg';
import TrendingThisWeekImg from '/images/trendingthisweek.jpg';
import CollectionsCard from '../../../utils/Cards/card2/CollectionsCard';

let Collections = () => {
    return (
        <div className={css.outerDiv}>
            <div className={css.title}>Collections</div>
            <div className={css.tagLine}>
                <span className={css.desc}>
                    Explore curated lists of top restaurants, cafes, pubs, and bars in Pune, based on trends
                </span>
                <span className={css.collectionPlacesTag}>
                    All collections in Pune{' '}
                    <span className={css.rightArrowBox}>
                        <img className={css.rightArrow} src={rightArrow} alt="right arrow" />
                    </span>
                </span>
            </div>
            <div className={css.cards}>
                {/* Wrapping each card with a Link for navigation */}
                <Link to="/CatchTheMatch">
                    <CollectionsCard
                        imgSrc={CathTheMatachImg}
                        title="Catch the Match"
                        places="30"
                    />
                </Link>
                <Link to="/new-in-town">
                    <CollectionsCard
                        imgSrc={NewInTownImg}
                        title="New In Town"
                        places="19"
                    />
                </Link>
                <Link to="/trending-this-week">
                    <CollectionsCard
                        imgSrc={TrendingThisWeekImg}
                        title="Trending This Week"
                        places="30"
                    />
                </Link>
                <Link to="/calling-bar-hoppers">
                    <CollectionsCard
                        imgSrc={CallingBarHoppersImg}
                        title="Calling all Bar Hoppers"
                        places="30"
                    />
                </Link>
            </div>
        </div>
    );
};

export default Collections;

import Deck from "./ui/TaroCards";
import styles from "./ui/styles.module.css"

const FeatureAnimation = () => {
    return (
        <div className="h-[600px] w-[100%] flex flex-col items-center justify-center">
            <div className={styles.container}>
                <Deck />
            </div>
            <p className="font-inter flex justify-center text-center w-full text-gray-400  mt-[10px] px-40">Swipe through the deck to reveal the features you're dealt—each card holds a game-changing advantage for you!</p>
        </div>
    );
};

export default FeatureAnimation;
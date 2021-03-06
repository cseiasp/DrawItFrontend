import React from 'react';
import DRAWING from "../adapters/drawings";
import CanvasDraw from "react-canvas-draw";

const Home = () => {
    return (
        <CanvasDraw
        disabled
        hideGrid= {true}
        loadTimeOffset={0}
        canvasWidth={1100}
        canvasHeight={600}
        lazyRadius={5}
        brushRadius={5}
        catenaryColor="white"
        immediateLoading={false}
        saveData={DRAWING}
      />
    );
}

export default Home;

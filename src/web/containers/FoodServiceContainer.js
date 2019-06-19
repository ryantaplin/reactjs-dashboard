import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import {FaInfo} from 'react-icons/fa'
import FoodServiceSelectionModal from "../components/modals/FoodServiceSelectionModal";
import SearchField from "../components/searchfield/SearchField";

class FoodServiceContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {modalOpen: false};
    }

    handleModalClose = () => {
        this.setState({modalOpen: false});
    };

    onClickAction = (selection) => () => this.setState({
        modalOpen: true,
        selectionRef: selection.title,
        selectionTitle: selection.id
    });

    render() {
        const foodEntries = [{
            id: "ah",
            title: "Spaghetti Bolognese",
            cuisine: "Italian",
            summary: {time: "45", temperature: {value: "20", type: "Celcius"}},
            img: "https://www.recipetineats.com/wp-content/uploads/2016/08/Spaghetti-Bolognese_4-1-500x375.jpg"
        }, {
            id: "ah1",
            title: "Cocunut Curry",
            cuisine: "Indian",
            summary: {time: "45", temperature: {value: "20", type: "Celcius"}},
            img: "https://glutenfreecuppatea.co.uk/wp-content/uploads/2018/10/gluten-free-spiced-coconut-curry-recipe-dairy-free-low-fodmap-featured.jpg"
        }, {
            id: "ah2",
            title: "Chicken Fajita",
            cuisine: "",
            summary: {time: "45", temperature: {value: "20", type: "Celcius"}},
            img: "https://www.oldelpaso.co.uk/-/media/oep/uk/recipes/char-grilled-chicken-fajitas-hero.jpg"
        }, {
            id: "ah3",
            title: "Chicken Fajita",
            cuisine: "",
            summary: {time: "45", temperature: {value: "20", type: "Celcius"}},
            img: "https://www.oldelpaso.co.uk/-/media/oep/uk/recipes/char-grilled-chicken-fajitas-hero.jpg"
        }, {
            id: "ah4",
            title: "Chicken Fajita",
            cuisine: "",
            summary: {time: "45", temperature: {value: "20", type: "Celcius"}},
            img: "https://www.oldelpaso.co.uk/-/media/oep/uk/recipes/char-grilled-chicken-fajitas-hero.jpg"
        }, {
            id: "ah5",
            title: "Chicken Fajita",
            cuisine: "",
            summary: {time: "45", temperature: {value: "20", type: "Celcius"}},
            img: "https://www.oldelpaso.co.uk/-/media/oep/uk/recipes/char-grilled-chicken-fajitas-hero.jpg"
        }, {
            id: "ah6",
            title: "Chicken Fajita",
            cuisine: "Mexican",
            summary: {time: "45", temperature: {value: "20", type: "Celcius"}},
            img: "https://www.oldelpaso.co.uk/-/media/oep/uk/recipes/char-grilled-chicken-fajitas-hero.jpg"
        }];
        return (
            <div className="page-container" style={{height: '80vh'}}>
                {this.state.modalOpen ? <FoodServiceSelectionModal selectionRef={this.state.selectionRef}
                                                                   selectionTitle={this.state.selectionTitle}
                                                                   closingAction={this.handleModalClose}/> : ""}
                <div style={{margin: '10px', justifyContent: 'space-around', display: 'flex'}}>
                    <SearchField displayText={"Name"}/>
                    <SearchField displayText={"Cuisine"}/>
                    <SearchField displayText={"Test..."} defaultText={"Test..."}/>
                </div>
                <div style={{
                    display: 'flex', flexWrap: 'wrap',
                    justifyContent: 'space-around', overflowX: 'hidden', overflowY: 'auto'
                }}>
                    <div style={{height: '70vh'}}>
                        <GridList cellHeight={180}>
                            {foodEntries.map(selection => (
                                <GridListTile key={selection.id} onClick={this.onClickAction(selection)}>
                                    <img src={selection.img} alt={selection.title}/>
                                    <GridListTileBar
                                        title={selection.title}
                                        actionIcon={
                                            <IconButton style={{color: 'rgba(255, 255, 255, 0.54)'}}>
                                                <FaInfo/>
                                            </IconButton>
                                        }/>
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                </div>
            </div>
        );
    }
}

export default FoodServiceContainer;



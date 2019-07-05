import React, {useState} from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import {FaInfo} from 'react-icons/fa'
import FoodServiceSelectionModal from "../components/modals/FoodServiceSelectionModal";
import SearchField from "../components/searchfield/SearchField";
import { FoodEntries } from "../../stub/FoodServiceStub";

export default function FoodServiceContainer(props) {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectionRef, setSelectionRef] = useState("");
    const [selectionTitle, setSelectionTitle] = useState("");

    //todo: change modalState to use context intead
    function handleModalClose() {
        setModalOpen(false);
    }

    function onClickAction(selection) {
        return function anonFunction() {
            setModalOpen(true);
            setSelectionRef(selection.id);
            setSelectionTitle(selection.title);
        }
    }

    return (
        <div className="page-container" style={{height: '80vh'}}>
            {modalOpen ? <FoodServiceSelectionModal selectionRef={selectionRef}
                                                    selectionTitle={selectionTitle}
                                                    closingAction={handleModalClose}/> : ""}
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
                        {FoodEntries.map(selection => (
                            <GridListTile key={selection.id} onClick={onClickAction(selection)}>
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


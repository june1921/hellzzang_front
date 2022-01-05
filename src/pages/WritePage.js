import React from 'react';
import EditorContainer from '../containers/write/Editorcontainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import Responsive from '../components/common/Responsive';
import WriteActionButtons from '../components/write/WriteActionButtons';

const WritePage = () => {
    return (
        <Responsive>
            <EditorContainer />
            <TagBoxContainer />
            <WriteActionButtons />
        </Responsive>
    );
};

export default WritePage;
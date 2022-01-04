import React from 'react';
import EditorContainer from '../containers/write/Editorcontainer';
import TagBox from '../components/write/TagBox';
import Responsive from '../components/common/Responsive';
import WriteActionButtons from '../components/write/WriteActionButtons';

const WritePage = () => {
    return (
        <Responsive>
            <EditorContainer />
            <TagBox />
            <WriteActionButtons />
        </Responsive>
    );
};

export default WritePage;
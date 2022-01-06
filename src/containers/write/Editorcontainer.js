import React, { useEffect, useCallback } from "react";
import Editor from '../../components/write/Editor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";

const EditorContainer = () => {
  <InputGroup size="lg">
    <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
};

export default EditorContainer;
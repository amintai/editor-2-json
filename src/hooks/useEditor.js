import HTMLParser from 'html-to-json-parser';
import React, { useState } from 'react'

const useEditor = () => {
  const [{ value, htmlInput }, setState] = useState({
    value: '',
    htmlInput: ''
  });



  const handleChange = (content, _delta, _source, editor) => {
    setState((state) => ({
      ...state,
      value: content,
      htmlInput: editor.getHTML()
    }))
  }

  const generateJSON = async () => {
    let res = await HTMLParser(htmlInput, true)
    alert(res)
    console.log(JSON.parse(res))

  }

  return [{ value, htmlInput }, { handleChange, generateJSON }]
}

export default useEditor;
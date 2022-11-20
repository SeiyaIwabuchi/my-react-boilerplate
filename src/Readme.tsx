import { Box, Paper } from "@mui/material";
import ReactMarkdown from "react-markdown";
import Floor from "./Floor";

function Readme() {

    const content = `
# react-boilerplate
## 概要
Reactでよく使うライブラリを集めて、テンプレートにしたものです。

## インストール済みパッケージ
- Typescript
- Material-UI
- Redux Toolkit
- testing-library
- date-fns
- react-markdown
- react-router-dom

## 使い方
Githubからcloneして好きなように改変してください。  
### コンポーネントについて
Material-UIのNavbarとDrawerをアプリケーション全体で使用することを想定しています。  
そのため、Floor.tsxにコンポーネントとしてまとめられています。  
Floorコンポーネントの子要素にそのページの内容を入れてください。  
例として、ReduxのハローワールドのページのApp.tsxを参照してください。  
また、このページはReadme.tsxに記載されている内容を表示しています。  
作成するアプリケーションに応じて内容を変更してください。
ちなみにMarkdownで書いています。
`;

    return (
        <Floor>
            <Box sx={{ display:"flex", flexDirection:"row", justifyContent:"center" }}>
                <Paper sx={{minWidth:"400px", width: "50%", padding:"10px", backgroundColor:"#e1eeef"}}>
                    <ReactMarkdown>{content}</ReactMarkdown>
                </Paper>
            </Box>
        </Floor>
    );
}

export default Readme;
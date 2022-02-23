import { CensorText } from '@Styles/global.js';

export const CensorBar = ({ text }) => {
  return (
    <CensorText>
      {text.split(' ').map((word, index) => {
        return <span key={`${word}-${index}`}>{word}</span>;
      })}
    </CensorText>
  );
};

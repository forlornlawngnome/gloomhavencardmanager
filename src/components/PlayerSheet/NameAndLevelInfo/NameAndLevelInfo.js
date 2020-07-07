import React from 'react';

import './NameAndLevelInfo.css';

const levelXpMap = [0, 45, 95, 150, 210, 275, 345, 420, 500];

const NameAndLevelInfo = (props) => {
  const {name, level} = props;

  // TODO less prop drilling
  return (
    <div className="NameAndLevelInfo">
      <div>Name: {name}</div>
      <table>
        <tr>
          <td>Level: </td>
          {Array.apply(null, { length: 9 }).map((e, i) => (
            <td className={`NameAndLevelInfoNum ${i+1 <= level ? 'NameAndLevelInfoBoxSelected' : 'NameAndLevelInfoBox'}`} key={`NameAndLevelInfolvtd${i}`}>{i+1}</td>
          ))}
          <td>
            <input type="button" value="-" />
          </td>
          <td>
            <input type="button" value="+" />
          </td>
        </tr>
        <tr>
          <td>XP: </td>
            {Array.apply(null, { length: 9 }).map((e, i) => (
              <td className="NameAndLevelInfoNum" key={`NameAndLevelInfoxptd${i}`}>{levelXpMap[i]}</td>
            ))}
        </tr>
      </table>
    </div>
  )
}

export default NameAndLevelInfo;

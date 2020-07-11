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
        <tbody>
          <tr>
            <th>Level: </th>
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
            <th>XP: </th>
              {Array.apply(null, { length: 9 }).map((e, i) => (
                <td className="NameAndLevelInfoNum" key={`NameAndLevelInfoxptd${i}`}>{levelXpMap[i]}</td>
              ))}
              <td />
              <td />
          </tr>
        </tbody>
      </table>
      <hr />

      <table className="stack">
        <thead>
          <tr>
            <th colSpan="2" className="text-center"><input type="button" value="-" /> <b>Level</b> <input type="button" value="+" /></th>
          </tr>
          <tr>
            <th>Level:</th>
            <th>XP:</th>
          </tr>
        </thead>
        <tbody>
            {Array.apply(null, { length: 9 }).map((e, i) => (
              <tr key={`NameAndLevelTR${i}`}>
                <td className={`NameAndLevelInfoNum ${i+1 <= level ? 'NameAndLevelInfoBoxSelected' : 'NameAndLevelInfoBox'}`} key={`NameAndLevelInfolvtd${i}`}>{i+1}</td>
                <td className="NameAndLevelInfoNum" key={`NameAndLevelInfoxptd${i}`}>{levelXpMap[i]}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default NameAndLevelInfo;

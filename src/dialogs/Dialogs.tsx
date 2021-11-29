import React from 'react';
import c from './Dialogs.module.css';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../redux/store';

type DialogsPropsType ={
 id:number
 name:string
 status:string | boolean
 img:string
}

const Dialog:React.FC<DialogsPropsType> = (p) => {
  return (
    <div className={`${c.item}`}>
      <img src={p.img} alt='hero' />
      <Link to={`/messages/${p.id}`}>{p.name}</Link>
      <div className={`${c.circle} ${p.status ? c.online : c.offline}`}></div>
    </div>
  );
};
type MessagePropsType = {
  message:string
  id:number
}
const Message:React.FC<MessagePropsType> = (p) => {
  return <div className={`${c.message}`}>{p.message}</div>;
};
const Dialogs:React.FC = () => {
  const dialogs = useAppSelector((state) => {
    const { dialogs } = state;
    return dialogs.dialogs;
  });
  const messages = useAppSelector((state) => {
    const { messages } = state;
    return messages.messages;
  });
  return (
    <div className={c.wrapper}>
      <div className={`${c.dialogs}`}>
        {dialogs.map((d) => {
          return (
            <div key={d.id}>
              <Dialog
                name={d.name}
                id={d.id}
                img={d.avatar}
                status={d.isOnline}
              />
            </div>
          );
        })}
      </div>
      <div className={`${c.messages}`}>
        {messages.map((m) => (
          <div key={m.id}>
            <Message message={m.message} id={m.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dialogs;

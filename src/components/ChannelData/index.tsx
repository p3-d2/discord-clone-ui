import React, { useRef, useEffect } from 'react';

import ChannelMensage, { Mention } from '../ChannelMensage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMensage 
            key={n}
            author='Pedro Henrique'
            date='29/01/2004'
            content='Hoje é meu aniversário'
          />
        ))}

        <ChannelMensage 
          author='Guilerme Rodz'
          date='21/06/2020'
          content={
            <>
              <Mention>@Pedro Henrique</Mention>, me carrega no Lol e CS de novo por favor?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type='text' placeholder='Conversar em #chat-livre' />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;

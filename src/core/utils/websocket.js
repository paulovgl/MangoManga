import Ws from '@adonisjs/websocket-client';

import { websocketpoint } from '../endpoints';
import Token from '../token'

export class SocketConnection {
  connect () {
    this.ws = Ws(`${websocketpoint}`)
      .withApiToken(Token.getToken())
      .connect();

    this.ws.on('open', () => {
      console.log('Connection initialized')
    });

    this.ws.on('close', () => {
      console.log('Connection closed')
    });

    return this
  }

  subscribe (channel, handler) {
    if (!this.ws) {
      setTimeout(() => this.subscribe(channel), 1000)
    } else {
      const result = this.ws.subscribe(channel);

      // result.on('message', message => {
      //   console.log('Incoming', message);
      //   handler(message)
      // });

      result.on('new', message => {        
        handler.post(message)
      });

      result.on('comments', message => {        
        handler.comment(message)
      });

      result.on('likes', message => {         
        handler.like(message)
      });

      result.on('likes_comment', message => {         
        handler.likecomment(message)
      });


      result.on('error', (error) => {
        console.error(error)
      });

      return result
    }
  }
}

export default new SocketConnection()
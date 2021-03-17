import { ApolloClient, ApolloProvider, InMemoryCache, gql, useQuery, useMutation, useSubscription } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { useState } from 'react';

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000/subscriptions',
  options: {
    reconnect: true
  }
});

const client = new ApolloClient({
  link: wsLink,
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

const MESSAGE_SUB = gql`
subscription {
    messages {
        id
        user
        msg
    }
}
`


const GET_MESSAGES = gql`
  query {
    messages {
        id
        user
        msg
    }
}
`;

const POST_MESSAGES = gql`
    mutation ($user: String!, $msg: String!){
        postMessage(user: $user, msg: $msg)
    }
`;

function Message({message, user, currentUser}) {
    return user !== currentUser ? 
        <div className="flex items-center justify-items-start">
            <div className="bg-gray-200 text-gray-900 w-auto max-w-xl p-2 rounded-lg">{message}</div>
        </div> :
        <div className="flex items-center justify-end">
            <div className="bg-blue-500 text-white w-auto max-w-xl p-2 rounded-lg">{message}</div>
        </div>
}

export function ChatWrap({name}) {
    return (
        <ApolloProvider client={client}>
            <Chat name={name} />
        </ApolloProvider>
        )
}

export default function Chat({name}) {
    const { data } = useSubscription(MESSAGE_SUB);
    const [postMessage] = useMutation(POST_MESSAGES);
    
    const [currentUser, setCurrentUser] = useState({
        user: name,
        msg: ''
    });
    
    if (!data) return null;

    const sendMessage = () => {
        if (currentUser.msg.length > 0) {
            postMessage({variables: {msg: currentUser.msg, user: currentUser.user}})
        }
        setCurrentUser({ ...currentUser, msg: '' });
    }

    return (
        <div>
  <div className="overscroll-none">
    <div className="fixed top-0 w-full bg-blue-500 h-16 p-4 flex items-center justify-between shadow-md overscroll-none">
      {/* back button */}
      <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-200 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      <div className="text-blue-200 font-bold text-lg tracking-wide">@fla1me</div>
      {/* 3 dots */}
      <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-200 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
      </svg>
    </div>
    <div className="mt-20 mb-16 space-y-4 px-4">
      {data.messages.map(message => <Message message={message.msg} user={message.user} currentUser={currentUser.user} />)}
    </div>
  </div>
  <div className="fixed bottom-0 w-full flex items-start px-4 py-3">
                <input
                    className="flex-grow px-4 py-2 text-gray-900 placeholder-gray-400 bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-full outline-none transition duration-150"
                    placeholder="Aa..."
                    value={currentUser.msg}
                    onChange={({ target: { value } }) => setCurrentUser({ ...currentUser, msg: value })}
                    onKeyUp={e => e.key === 'Enter' && sendMessage()}
                />
    <button className="outline-none ml-4 transform hover:scale-110 transition duration-150" onClick={sendMessage}>
      <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-500 w-8 h-8 transform rotate-45" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
      </svg>
    </button>
  </div>
            </div>
    )
}
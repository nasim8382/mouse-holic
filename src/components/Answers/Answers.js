import React from 'react';
import './Answers.css';
import { Accordion } from 'react-bootstrap';

const Answers = () => {
    return (
        <div className='accordian'>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Header><h5 className='accordian-heading'>Question: How React Works? </h5></Accordion.Header>
                <Accordion.Body>
                   <h6>React is a JavaScript-based UI development library. let's see how it works...</h6>
                   <p className='accordian-text'>
                       We can say 
                       <span> JavaScript library = bunch of pre-written JavaScript codes.</span> React is such kind of library of JS <br></br>
                       React works in declarative code. At its very core, React basically maintains a tree for you. This tree is able to do efficient diff computations on the nodes. Here is (Diffing means comparing old content with new content to figure out what’s changed.) React works with virtual dom which is not actually same as the real dom. Virtual dom executing the necessary DOM operations to render the new content. Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
                   </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header><h5 className='accordian-heading'>Question: What is the difference between state and props?</h5></Accordion.Header>
                <Accordion.Body>
                    <h6>The differences are:</h6>
                    <ol className='ordered-list'>
                        <li><strong>Props</strong>  are immutable (that means it cannot be modified) but <strong>State</strong>  is Mutable(that means we have the freedom to modified it).</li>
                        <li>By <strong>Props</strong>  we can passed data from one component to another but <strong>State</strong> has the limitation to pass data within the component only.</li>
                        <li><strong>Props</strong> are equivalent to local variables in a function on the other hand <strong>State</strong> is equivalent to function parameters.</li>
                        <li><strong>Props</strong> are read-only but we can both read and write with  <strong>State</strong>.</li>
                        <li><strong>Props</strong> gives us the oppurtunity to make components reusable but <strong>State</strong> cannot make components reusable.</li>
                        <li>We can access <strong>Props</strong> by the child component but <strong>State</strong> cannot be accessed by child components.</li>
                    </ol>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header><h5 className='accordian-heading'>Question: How usestate works?</h5></Accordion.Header>
                <Accordion.Body>
                    <h6>Short explaination of useState hook:</h6>
                    <p>
                        We know that hooks are a fundamentally simpler way to encapsulate stateful behavior and side effects in user interfaces. <br></br>
                        Mainly <strong>useState</strong> is a React Hook, which allows us to track state variables in the JSX functional component. It is a special function that takes one argument which is the initial state and returns an array of two entries.The first element is the initial state and the second one is a function that is used for updating the state. Interesting fact is, we can also pass a function as an argument if the initial state has to be computed. And the value returned by the function will be used as the initial state.
                    </p>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Answers;
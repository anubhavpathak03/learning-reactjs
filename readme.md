[🔗 Youtube Video -> High level picture Of ReactJS ](https://youtu.be/s2skans2dP4?si=AJ7BTXecOmoCcirT)

## In LearningHook Concept
 
**we learn about "useState" (which is used for set and update state) and "batching" and learn how to avoid batching by using prevState**


-> React doesn’t update state immediately. Instead, it schedules an update. When you do:

--setCounter(counter + 1);  
--setCounter(counter + 1);


Here, counter is the same value in both calls — a stale snapshot of the current state — so both calls are effectively doing:

--setCounter(5);<br/>
--setCounter(5);

### **So only one increment happens.**

Here, React treats each update as dependent on the **most recent** value — even across batched updates.

-- setCounter(prev => prev + 1);<br/>
-- setCounter(prev => prev + 1);

So this becomes:

-- prev = 5 → setCounter(6); <br/>
-- prev = 6 → setCounter(7);

<br/>
<br/>
<br/>

## About Props and function Componenet 


**Props** (short for Properties) used for passing data from parent component to child component.
They are the **objects** on console.log

props are received as a parameter and are used to render dynamic content or trigger specific logic.


Also learn about **dumb components** which means they are static not change. **Components** are shortning of our code and make it more modularise, and we can have Individual control on each components like card, navbar etc. we can handle them seperately without disturbing other compoents on webpage.
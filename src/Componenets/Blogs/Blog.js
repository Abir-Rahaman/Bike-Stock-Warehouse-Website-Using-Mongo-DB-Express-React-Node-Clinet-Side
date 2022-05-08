import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h2>Difference between javascript and nodejs</h2>
            <p> 1.JavaScript is a simple programming language that runs in any browser JavaScript Engine.
                1.Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.
                2.JavaScript is normally used for any client-side activity for one web application. An activity can be addressing business validation or dynamic page display in some schedule time interval or basic Ajax call kind of task. Those are used for a maximum time for any web application. 
                2.Node JS mainly used for accessing or running any operating system for non-blocking operation. An operation like creating or executing a shell script, or getting some specific hardware-related information on one call or installed certificate details in the system or a lot of define task is non-blocking on an operating system.
                3.JavaScript running in any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome). So JavaScript programming is very easy to write, and put any running environment means proper browser. 
                3.Node JS only support the V8 engine, which googles chrome specific. But whether it supports the V8 engine, written JavaScript code can able to run in any environment. So there has no browser-specific constraint on it.  </p>

                <br />

        <h2> Differences between sql and nosql databases.</h2>
        <p> 1.SQL databases are primarily called as Relational Databases (RDBMS); 
            1. NoSQL database are primarily called as non-relational or distributed database.
            2.SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure. 
            SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability) 
            2. NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance). </p>
            <br />
        <h2>What is the purpose of jwt and how does it work</h2>
        <p>JWT (JSON Web Token) is an open standard that allows two parties — a client and a server — to share security information. JSON items, containing a set of claims, are encoded in each JWT. JWTs use a cryptographic technique to ensure that the claims cannot be changed after the token has been issued.</p>


            
        </div>
    );
};

export default Blog;
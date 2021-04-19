import React from 'react'


const Usercontext= React.createContext()

const Userprovider=Usercontext.Provider
const Userconsummer=Usercontext.Consumer

export {Userprovider,Userconsummer}
import React from 'react';
import Button from '../comps/Button';
import './main.css'
import Divider from '../comps/Divider';
import Input from '../comps/Inputs';
import Banner from '../comps/Banner';
import Hero from '../comps/Hero';
import Header from '../comps/Header';
import Nav from '../comps/Nav';
import GoogleButton from '../comps/GoogleButton';

export default {
    title: 'Welcome Form',
    component: Button
};

export const Buttons = () => <div>
    <GoogleButton />
    <Button />
    <Button bgcolor="#D79B9B" title="Signup" />
    </div>;

export const Dividers = () => <Divider />

export const InputForms = () => <div>
    <Input />
    <Input label="password" type="password"/>
    </div>;

export const Banners = () => <Banner />;
export const HeroImage = () => <Hero/>;

export const Headers = () => <Header />;

export const SignupPage = () => <div>
    <Header title="Signup For an account" subtitle=""/>
    <Input />
    <Input label="password" type="password"/>
    <Input label="confirm password" type="password"/>
    <Button bgcolor="#D79B9B" title="Signup" />
</div>

export const Navigation = () => <Nav />;
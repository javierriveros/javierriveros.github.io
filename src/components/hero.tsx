import * as React from "react"
import ProfileImage from "./profile-image"

export default function Hero() {
  return (
    <section>
      <article>
        <h1>Hi! I{"'"}m Javier Riveros.</h1>
        <h2>I{"'"}m a web developer from Colombia 🇨🇴</h2>
        <p>
          I{"'"}m currently working as an intern at Enciso Systems company. I
          {"'"}ve been building modern web applications using Ruby on Rails and
          React for about +2 years. In my spare time, I like to learn new things
          and read books. I am currently finishing my systems engineering
          studies at Los Llanos university.
        </p>
      </article>
      <aside>
        <ProfileImage />
      </aside>
    </section>
  )
}

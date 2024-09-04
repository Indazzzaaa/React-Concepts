import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { createContext, useContext, useState } from 'react';

// create context
const ThemeContext = createContext('dark');

export default function MyApp() {
    // state through which data stored in context will be updated.
  const [theme, setTheme] = useState('light');
  return (
    < div className='flex flex-col gap-y-4 bg-slate-300/60 hover:bg-slate-300/80 p-8 border-2 rounded-md '>
    {/* wrap context around the sub-tree */}
      <ThemeContext.Provider value={theme}>
        <Form />
      </ThemeContext.Provider>

      <Separator />

      {/* This is the pitfall we mentioned in notes : In this time MyButton also consumes context 
      but it's not part of it's subtree so in this case it will use the default value we assigned which is dark */}
      <MyButton onClick={() => {
        setTheme(Object.is(theme,'dark') ? 'light' : 'dark');
      }}>
        Theme: {theme}
      </MyButton>
    </div>
  )
}

function Form() {
  return (
    <Panel title="Welcome" >
      <MyButton>Sign up</MyButton>
      <MyButton>Log in</MyButton>
    </Panel>
  );
}

function Panel({ title , children } : {title:string, children: React.ReactNode}) {
    // this is how to consume the context.
  return (
    <section className='space-y-4 space-x-2'>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function MyButton({ children , onClick } : {children: React.ReactNode , onClick? : any}) {
  const theme = useContext(ThemeContext);
  return (
   <Button onClick={onClick} variant={Object.is(theme,'light') ? 'outline' : 'default'}>
      {children}
   </Button>
  );
}
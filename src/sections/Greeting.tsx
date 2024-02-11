import Header from '../components/Header'

export default function Greeting() {
  return (
    <div className="flex snap-start flex-col">
      <Header className="slide-effect border border-white">
        <p className="slideUp animation-slideUp text-8xl">Nathen</p>
        <p className="slideUp animation-slideUp m-1 text-7xl">dela Torre</p>
      </Header>

      <Content />
    </div>
  )
}

function Content() {
  return (
    <div className="m-1 my-0 mx-auto flex w-full flex-col sm:w-[600px]">
      <p className="text-bold m-1 text-center text-6xl">About Me</p>

      <p className="m-1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error minima
        veniam voluptas officia tempore! Asperiores eos totam labore accusantium
        quas id dolor distinctio cumque quam, expedita quaerat, incidunt eveniet
        tenetur debitis vero beatae iure sequi vitae ipsa, alias molestias
        adipisci doloremque itaque! Ad fugiat aliquam nam corrupti quos iusto
        laborum placeat velit aut. Inventore quo asperiores consequatur, ut id
        laudantium aut sint aliquid itaque nulla totam nesciunt facere nihil
        autem deserunt blanditiis dolore fugit quasi animi excepturi reiciendis
        dolorum vitae veritatis. Excepturi molestias voluptatem architecto
        reiciendis aliquid deleniti exercitationem perferendis esse laboriosam?
        Inventore ipsa velit iusto enim voluptates, ipsam maxime laboriosam est
        veritatis rem ducimus ipsum? Consectetur ea quae neque labore? Aliquam a
        numquam, reprehenderit suscipit fugit rem deserunt natus pariatur aut
        nisi nostrum distinctio iure, quaerat debitis consectetur accusamus id
        harum autem nulla ducimus saepe. Dicta deleniti est libero minus
        laudantium quod, inventore suscipit eos consequatur ex exercitationem
        excepturi quam eveniet reiciendis ipsum labore molestias quidem ut
        ratione. Excepturi expedita in laboriosam neque, minus tempora cum
        facilis dolor totam exercitationem saepe corrupti aliquid, laudantium
        eius fuga at earum? Ea fuga sit dicta in debitis illum, minus explicabo
        voluptas autem nisi necessitatibus aliquid quasi eum quod dignissimos
        repellendus inventore nam.
      </p>
    </div>
  )
}

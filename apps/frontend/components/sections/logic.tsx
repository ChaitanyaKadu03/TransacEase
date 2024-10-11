import { auth } from "../../auth"

export default async function Logic_div({ img }: any) {
    //   const session = await auth()

    //   if (!session.user) return null

    //   return session.user.name

    console.log(img);
    

    return (
        <div>
            <img src={img} alt="User Avatar" />
        </div>
    )
}
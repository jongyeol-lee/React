import { Link } from "react-router-dom"

function PopularBoard({

    boards

}){

    const popularBoards=[

        ...boards

    ].sort(

        (a,b)=>b.view-a.view

    ).slice(0,5)

    return(

        <div className="popularBoard">

            <h3>

                🔥 인기 게시글

            </h3>

            <ul>

                {

                    popularBoards.map(board=>(

                        <li key={board.id}>

                            <Link to={`/view/${board.id}`}>

                                {board.title}

                            </Link>

                            <span>

                                조회 {board.view}

                            </span>

                        </li>

                    ))

                }

            </ul>

        </div>

    )

}

export default PopularBoard
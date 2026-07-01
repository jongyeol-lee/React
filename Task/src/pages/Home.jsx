import { useState } from "react"
import { Link } from "react-router-dom"

import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import SearchBar from "../components/SearchBar"
import BoardTable from "../components/BoardTable"
import DashboardCard from "../components/DashboardCard"
import PopularBoard from "../components/PopularBoard"

function Home({ boards }) {

    const [keyword, setKeyword] = useState("")

    const filterBoards = boards.filter((board) =>

        board.title.toLowerCase().includes(
            keyword.toLowerCase()
        )

    )

    return (

        <>

            <Header />

            <div className="container">

                <Sidebar />

                <main className="content">

                    <div className="dashboard">

                        <DashboardCard

                            title="전체 게시글"

                            value={boards.length}

                        />

                        <DashboardCard

                            title="총 조회수"

                            value={

                                boards.reduce(

                                    (sum,board)=>sum+board.view,

                                    0

                                )

                            }

                        />

                        <DashboardCard

                            title="오늘 등록"

                            value={

                                boards.filter(

                                    board=>

                                    board.date===

                                    new Date().toLocaleDateString()

                                ).length

                            }

                        />

                        <DashboardCard

                            title="평균 조회수"

                            value={

                                boards.length===0

                                ?

                                0

                                :

                                Math.floor(

                                    boards.reduce(

                                        (sum,board)=>sum+board.view,

                                        0

                                    )/boards.length

                                )

                            }

                        />

                    </div>

                    <div className="topMenu">

                        <SearchBar

                            keyword={keyword}

                            setKeyword={setKeyword}

                        />

                        <Link to="/write">

                            <button className="writeBtn">

                                글쓰기

                            </button>

                        </Link>

                    </div>

                    <PopularBoard boards={boards}/>

                    <BoardTable

                        boards={filterBoards}

                    />

                </main>

            </div>

        </>

    )

}

export default Home
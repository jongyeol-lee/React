import './ItemComponent2.css'

function ItemComponent2(props){
    return (
        <div className='item' onClick={props.onClick}>
            <div className='item2'>
                <div className='line3'>
                    <span>{props.item.no}</span>
                    <span>{props.item.name}</span>
                </div>
                <div className='line4'>
                    {props.item.message}
                </div>
            </div>
            <div className='line5'>
                <img className='img_' src={props.item.image}/>
            </div>

        </div>
    )
}
export default ItemComponent2
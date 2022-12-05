import './stats.css'

function Stats({title, value}){
    return (
        <div className='stats'>
            <span className='stats__title'>
                {title}
            </span>
            <span className='stats__value'>
                {value}
            </span>
        </div>
    )
}

export default Stats;
export default function Avatar({ image, isNew }) {
    return (
        <div className="profile">
            <img className='photo'
                src={image}
                alt='star'
            />
            {isNew && <span>new</span>}
        </div>
    );
}
import bg_Probus from '@/static/slideshow-7107-hinh.jpg';

export default function Background() {
    return (
        <div className="w-full h-40 overflow-hidden">
            <img
                src={bg_Probus}
                alt="img-bg"
                className="w-full h-full object-center"
            />
        </div>
    );
}
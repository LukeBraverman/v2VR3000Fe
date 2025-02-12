export default function Home() {
    return (
        <div className="flex h-[100%]">
            {/* Video Holder - 80% */}
            <div id="videoholder" className="flex-[4] bg-gray-200 flex justify-center items-center h-[100%]">
                <video className="w-[70%] h-[70%] object-cover" controls>
                    <source src="/tokido.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>


            {/* Notes Sidebar - 20% */}
            <div id="notessidebar" className="flex-[1] bg-gray-800 text-white p-4">
                <h1>Notes</h1>
            </div>
        </div>

    );
}

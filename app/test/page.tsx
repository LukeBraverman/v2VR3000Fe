'use client'

export default function Home() {

    const testFunct = async () => {
        console.log('testtest')
        const res = await getVideoLink('tokido.mp4')
        console.log('here', res);
    }

    const getVideoLink = async (fileName: string) => {
        const res = await fetch(`/api/vod/getVideoLink?fileName=${fileName}`);
        return res.json();
    };

    return (
        <div>
            <h1>testpage - working </h1>

            <button onClick={testFunct}>Test api</button>
        </div>
    );
}

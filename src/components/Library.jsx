import LibrarySong from './LibrarySong'

const Library = ({
    songs, 
    setCurrentSong, 
    audioRef, 
    isPlaying, 
    setSongs,
    libraryStatus
}) => {
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => (
                    <LibrarySong
                        audioRef={audioRef} 
                        songs={songs} 
                        setCurrentSong={setCurrentSong}
                        song={song}
                        key={song.id}
                        isPlaying={isPlaying}
                        setSongs={setSongs}
                    />
                ))}
            </div>
        </div>
    )
}

export default Library
export default function Stats(){
    return(
        <div>
            <button className="flex items-center text-base font-medium transition-all hover:opacity-60 uppercase" onClick={() => {
                const statsModal = document.getElementById('stats');
                if (statsModal instanceof HTMLDialogElement){
                    statsModal.showModal();
                }
            }}>Stats</button>
            <dialog id="stats" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="flex flex-col items-center text-base-content justify-center normal-case">
                        <h1 className="font-semibold text-xl mb-5">Stats</h1>
                        <h2 className="font-medium">Uh Oh! Seems like this feature has not been added yet!</h2>
                        <h4 className="font-medium">Feel free to check back soon!</h4>

                        <p className="mt-5 text-xs">Do note this feature is intended for users only.</p>
                    </div>
                </div>
            </dialog>
        </div>
    )
}
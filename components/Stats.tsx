import Link from 'next/link';

export default function _Stats(){
    return(
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="font-semibold text-xl mb-5">Stats</h1>
        <div className="animate-pulse text-3xl mb-5">Coming Soon...</div>
        <h2 className="font-medium">Uh Oh! Seems like this feature has not been added yet!</h2>
        <h4 className="font-medium">Feel free to check back soon!</h4>

        <p className="mt-5 text-xs">Do note this feature is intended for users only.</p>
        <Link href="/" className="mt-5 btn btn-primary">Go Back</Link>
      </div>
    )
}

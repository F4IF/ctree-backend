[Click here for steps to set up this project on your local machine](#setup)

# Events

We're currently holding online events every [Tuesday night](https://www.eventbrite.com/e/43962200124) and [Saturday afternoon](https://www.eventbrite.com/e/99903808982).  Join our [Los Angeles Meetup](https://www.meetup.com/cTreeProject) to keep track of upcoming events and communicate with other contributors anytime via our [Slack Group](http://slack.ctree.org).

# Collaboration Tree

The Collaboration Tree (cTree) is a new web technology aimed at facilitating
more productive discussions around a specific topic, usually a goal or problem
to solve.  Initially the goal is to help nonprofits communicate more effectively
with their communities, but the potential uses stretch far beyond that.  Other
community based web technologies like forums and wikis can be used at small
scales, but are less useful for larger topics or groups.  Collaboration Trees
will allow the quick interactions most users are accustomed to, while maximizing
the usefulness of their interaction and organizing the larger discussion.

With Collaboration Trees, all points are tied together, and by default can all
be traced back to a core point, like a specific topic or problem to solve.  Each
point can be updated and improved by the community, similar to a wiki, but
unlike most wikis, the highest rated version wins and is shown by default.
Alternate versions are easily available and can be individually discussed and
rated.  The type of data in each point is pluggable, with initial defaults of
text and images.  Feedback with supporting content like quotes or links to
supporting information are ranked higher by default.

Eventually the project will leverage AI to intelligently suggest things for
users to interact with that interest them, match their stated and observed
strengths, and can have a meaningful impact on the discussion.  For example,
users who often provide useful feedback on new ideas may be more likely to see a
new idea nobody has given feedback on.  Another example would be if a user tends
to rate things in a way that matches most other users or users of a specific
group, their ratings would be more valuable and they'd be more likely to see
something which hasn't been rated before it's potentially shown to other users.

While the project is open source and can be integrated into any website, the
goal is to also create a hub site where all public cTrees can be found.  This
will help with discovery as well as evangelize the use of the technology both on
the hub site and on unaffiliated sites.  At its peak, the largest cTrees will
likely develop their own sub-communities with their own input plugin sets.

## Backend

This specific project holds the officialy supported Collaboration Tree backend.

## Technology

The technology is based on:
1. Unix-Like Operating System, Debian and Ubuntu are most used, https://www.debian.org/index.pt.html and https://ubuntu.com/;
2. NGINX as proxy server, https://docs.nginx.com/;
3. NaviServer as webserver, https://naviserver.sourceforge.io/;
4. PostgreSQL as database manager system and PSQL as SQL language script. https://www.postgresql.org/docs/ and https://www.postgresql.org/docs/9.2/app-psql.html;
5. Python3 and TCL-TK as programing languages, https://www.python.org/doc/ and http://tcl.tk/man/tcl8.6/contents.htm;
6. OpenACS Framework https://openacs.org/doc/

## License
Copyright (c) 2020 Foundation For an Innovative Future (InnovativeFuture.org)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or any
later version.

Foundation For an Innovative Future reserves the right to release the
covered work, in part or in whole, under a different open source
license and/or with specific copyleft exclusions.  Such a release
would not invalidate the license for this project, although the
project released with a modified license would not be considered
part of this covered work or subject to the copyleft portions of this
license even if the projects are identical.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

Please email contact@innovativeFuture.org for inquiries related to
this license.

# Getting Started

TODO

## Community

The preferred method of communication for the community is our
[Slack group](http://slack.ctree.org).  There are also regular events held in
[Los Angeles, CA](http://meetup.ctree.org) and [online](https://eventbrite.com/o/13646084582)
to encourage contributors to set aside time to work on the project.  If you're
interested in starting events in your area please email
[contact@innovativeFuture.org](mailto:contact@innovativeFuture.org).  There are
also [Facebbok](http://facebook.ctree.org) and [Twitter](http://twitter.ctree.org) sites where
you can keep up with the project, as well as a [LinkedIn](http://linkedin.ctree.org)
organization you can list on your profile if you're a regular contributor.

## Teams

Because of the size of the project, issues are broken down into teams.
Contributors looking to bolster their resume may find it more useful to pick a
team to work with so they can point to that specific work rather than specific
changes or the project as a whole, though there's no requirement to work on
issues for a single team.  The current teams are:

### Backend

This team is responsible for implementing the database to hold and access all
user and collaboration tree data.  For the alpha version this means duplicating
the randomly generated data structures and interfaces and backing them with a
real online database.  This is a high priority part of the project, required
before we can start alpha testing.

### Landing Page

This team is responsible for implementing the new landing page shown to
users when first opening the site.  It's a way to introduce the technology to
people who aren't familiar with it and help them get started with the site.
This is a high priority part of the project, required before we can start alpha
testing.

### Visualization

One of the core ideas behind Collaboration Trees is that contributors can
quickly contribute by skimming suggested posts.  This makes reviewing the
most popular posts and overall structure of the tree more difficult for
anyone trying to watch the progress of the tree or check for an answer if a
question or problem was used as the seed for the tree.  This team is responsible
for creating and integrating different visualizations of the overall data.  This
will aid alpha testing, but is not yet a requirement before it begins.

### Post

Posts are the individual pieces which make up all Collaboration Trees,
similar to comments in a forum or pages on a wiki. Because of this, posts
require more work, which has been divided into sub-teams.

#### New Post

This team is responsible for implementing everything required to create new
posts, whether they're the first post for a new Collaboration Tree, a new
post related to another post, or a new post which needs to be linked to
another post.  This also includes the important task of looking for other
existing posts which may be similar and suggesting them to the user to try
and reduce duplicates.  Because this is required for building cTrees, the core
functionality is required before we can start alpha testing.

#### Post Details

This team is responsible for the core details screen of the post dialog.  The
core functionality is already implemented, but can be improved to be more
intuitive.  This team is also responsible for adding additional types of input
for posts via the pluggable structure.

#### Post Feedback

Feedback is a core component for Collaboration Trees, being supported for each
post variation as well as each variation of each piece of an post.  This
team is responsible for making the post dialog's feedback screen fully
functional, including listing, sorting, and adding feedback.  One unique feature
of cTree comments is that supporting data, like images, quotes, or studies, is
encouraged by increasing their visibility when included.  This team is also
responsible for the up/down vote functionality supported both on the feedback
screen and details screen of the post dialog.

#### Post Contributors

Posts list a summary of top contributors on their preview and details screen,
which takes the user to a summary of all contributors and their contributions to
the post.  This team is responsible for both the summary and page listing all
contributors.

### User Dialog

This team is responsible for the dialog listing information for and about users.
The dialog will contain information to allow users to review a summary of their
contributions as well as update their public and private account information.
This team will not be responsible for implementing the temporary accounts used
for alpha testing, but may build on it to implement the dialog.

## Usage

### Setup

#### Prerequisites

1. Unix-Like Operating System, Debian and Ubuntu are most used, https://www.debian.org/index.pt.html and https://ubuntu.com/;
2. NGINX as proxy server, https://docs.nginx.com/;
3. NaviServer as webserver, https://naviserver.sourceforge.io/;
4. PostgreSQL as database manager system and PSQL as SQL language script. https://www.postgresql.org/docs/ and https://www.postgresql.org/docs/9.2/app-psql.html;
5. Python3 and TCL-TK as programing languages, https://www.python.org/doc/ and http://tcl.tk/man/tcl8.6/contents.htm;


#### Checkout project

TODO

#### Recommended development environment

TODO

### Start the development server

TODO

### Build

TODO

### Test the build

TODO

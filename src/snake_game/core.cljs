(ns snake-game.core
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as reagent :refer [atom]]
            [re-frame.core :refer [register-handler register-sub subscribe dispatch dispatch-sync]]
            [goog.events :as events]
			[my-function.my-function :as my-function]
      [puzzle.model :as model]
      [puzzle.move :as move]))

(enable-console-print!)

(println "Hello")

;;(println (my-function/foo 7 6))
;;(println (model/test 13 11))
;;(println (model/test 13 12))
(println model/tiles)
(println (move/findMove model/tiles {:x 1 :y 1}))
(println (move/findMove model/tiles {:x -1 :y -1}))
(println (move/findMove model/tiles {:x 0 :y 0}))
(println (move/findMove model/tiles {:x 2 :y 2}))
(println (move/findMove model/tiles {:x 2 :y 3}))
(println (move/findMove model/tiles {:x 2 :y 1}))
(println (move/findMove model/tiles {:x 3 :y 2}))
(println (move/findMove model/tiles {:x 1 :y 2}))
(println (move/moveCoord model/tiles {:x 1 :y 2}))


;;(println (move/findMove 1 2))
;;(println (move/oneUp {:x 1 :y 2}))
;;(println (move/oneUp {:x 1 :y 0}))
;;(println (move/oneDown {:x 1 :y 0}))
;;(println (model/getFromCollection model/coords {:x 1 :y 0}))
;;(println (model/excludeFromCollection model/coords {:x 1 :y 0}))
;;(println (move/coor))
;;(println model/concatted)
;;(println model/flatted)
;;(println model/tile)
;;(println model/combined_list)
;;(println model/coords2)
;;(println (:x model/dims))
;;













;;;;;;;;;;;;;;;;;;;;;;;; Commented out
(comment
(ns snake-game.core
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as reagent :refer [atom]]´
            [re-frame.core :refer [register-handler register-sub subscribe dispatch dispatch-sync]]
            [goog.events :as events]))
)

(comment
	(ns snake-game.core
	  (:require ))

	(enable-console-print!)

	(println "This text is printed from src/snake-game/core.cljs. Go ahead and edit it and see reloading in action.")

	;; define your app data so that it doesn't get over-written on reload

	(defonce app-state (atom {:text "Hello world!"}))

	(defn on-js-reload []
	  ;; optionally touch your app-state to force rerendering depending on
	  ;; your application
	  ;; (swap! app-state update-in [:__figwheel_counter] inc)
	)
)

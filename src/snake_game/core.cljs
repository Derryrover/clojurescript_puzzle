(ns snake-game.core
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as reagent :refer [atom]]
            [re-frame.core :refer [register-handler register-sub subscribe dispatch dispatch-sync]]
            [goog.events :as events]
			[my-function.my-function :as my-function]))

(enable-console-print!)

(println "Helooooooooo")

(println (my-function/foo 7 6))
			



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